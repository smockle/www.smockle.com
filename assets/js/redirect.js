(() => {
  if (window.location.origin.includes("localhost")) {
    return;
  }
  if (window.location.origin.includes("www.smockle.com")) {
    window.location.href = `https://blog.smockle.com${window.location.pathname.replace(/^\/blog/, "")}`
  }
})();