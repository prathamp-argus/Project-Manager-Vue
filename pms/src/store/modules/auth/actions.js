export default {
  async login(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "login" });
  },
  async signup(context, payload) {
    // console.log(payload)
    return context.dispatch("auth", { ...payload, mode: "signup" });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = "http://localhost:3000/users/login";

    if (mode === "signup") {
      url = "http://localhost:3000/users";
    }
    // console.log(payload)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        password: payload.password,
      }),
    });

    // console.log(response)
    const responseData = await response.json();
    // console.log(responseData)
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      // throw error;
      console.log(error);
    }

    localStorage.setItem("userId", responseData.user._id);
    localStorage.setItem("token", responseData.token);

    console.log(localStorage.getItem("token"));
    context.commit("setUser", {
      userId: responseData.user._id,
      token: responseData.token,
    });
  },
  autologin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(token, userId);
    if (token && userId) {
      context.commit("setUser", {
        token,
        userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    context.commit("setUser", {
      userId: null,
      token: null,
    });
  },
};
