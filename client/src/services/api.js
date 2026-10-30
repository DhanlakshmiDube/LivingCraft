// LivingCraft API Service Layer

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost" ? "/api" : "/api");

// Token and User persistence keys
const TOKEN_KEY = "livingcraft_token";
const USER_KEY = "livingcraft_user";

export const getStoredToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const getStoredUser = () => {
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const setAuthData = (token, user) => {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    // LocalStorage quota or access denied
  }
};

export const clearAuthData = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {
    // LocalStorage access denied
  }
};

// Generic request wrapper with auth header & error handling
async function request(endpoint, options = {}) {
  const token = getStoredToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }

    return data;
  } catch (error) {
    // If backend proxy failed (e.g. running on port 5000 directly while testing)
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      if (typeof window !== "undefined" && window.location.hostname === "localhost") {
        try {
          const directUrl = `http://localhost:5000/api${endpoint}`;
          const directRes = await fetch(directUrl, { ...options, headers });
          const directData = await directRes.json().catch(() => ({}));
          if (!directRes.ok) {
            throw new Error(directData.message || `Request failed with status ${directRes.status}`, {
              cause: error,
            });
          }
          return directData;
        } catch (directErr) {
          throw new Error("Unable to connect to LivingCraft backend server. Ensure backend is running on port 5000.", {
            cause: directErr,
          });
        }
      }
    }
    throw error;
  }
}

// Health check
export const checkApiHealth = async () => {
  return await request("/health");
};

// Quote / Contact Submission
export const submitQuoteRequest = async (formData) => {
  return await request("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

// User Authentication
export const registerUser = async ({ name, email, password }) => {
  const result = await request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (result.data?.token) {
    setAuthData(result.data.token, {
      id: result.data.id,
      name: result.data.name,
      email: result.data.email,
      role: result.data.role,
    });
  }

  return result;
};

export const loginUser = async ({ email, password }) => {
  const result = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (result.data?.token) {
    setAuthData(result.data.token, {
      id: result.data.id,
      name: result.data.name,
      email: result.data.email,
      role: result.data.role,
    });
  }

  return result;
};

export const getCurrentUser = async () => {
  return await request("/auth/me");
};

// Products Catalog
export const fetchProducts = async () => {
  return await request("/products");
};
