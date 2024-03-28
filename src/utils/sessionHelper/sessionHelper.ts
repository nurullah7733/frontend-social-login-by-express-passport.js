class SessionHelper {
  setUserData(value: any) {
    localStorage.setItem("userData", JSON.stringify(value));
  }

  getUserData(): any {
    const item = localStorage.getItem("userData");
    return item ? JSON.parse(item) : null;
  }

  sessionDestroy() {
    localStorage.clear();
  }
}

export const sessionHelper = new SessionHelper();
