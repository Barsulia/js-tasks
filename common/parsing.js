const path = "/users/download/index.html"

const isHtml = p => {
  if (p.endsWith(".html")) {
    return true;
  } else {
    return false;
  }
}

console.log(isHtml(path))