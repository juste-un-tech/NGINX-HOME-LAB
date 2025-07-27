function sayHello() {
  let hostname = window.location.hostname;
  if (hostname.includes("one")) {
    alert("Hello from Site One");
  } else if (hostname.includes("two")) {
    alert("Hello from Site Two");
  } else {
    alert("Hello from Unknown Site");
  }
}

