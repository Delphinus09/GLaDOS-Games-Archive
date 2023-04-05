class ABC {
  constructor(config = {}) {
    this.type = config.type || "blank";
    this.url = config.url || "about:blank";
  }
  setType(type) {
    if (!type) return;
    this.type = type;
  }
  setUrl(url) {
    if (!url) return;
    this.url = url;
  }
  getCode() {
    return (
      `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
      this.url +
      `"></iframe>`
    );
  }
  open() {
    if (this.type == "blank") {
      try {
        var page = window.open();
        page.document.body.innerHTML =
          `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
          this.url +
          `"></iframe>`;
      } catch {}
    } else if (this.type == "blob") {
      try {
        var page = new Blob(
          [
            `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
              this.url +
              `"></iframe>`,
          ],
          { type: "text/html" }
        );
        window.open(URL.createObjectURL(page));
      } catch {}
    } else if (this.type == "overwrite") {
      try {
        document.body.innerHTML =
          `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
          this.url +
          `"></iframe>`;
      } catch {}
    }
  }
}

function cloak() {
  //Creates new ABC
  var page = new ABC({
    type: "blank", //Blank, blob, or overwrite
    url: "https://google.com", //Any url
  });
  //Set the type
  page.setType("blank");
  //Set the url
  page.setUrl("https://55gms.me/settings.html");
  //Get iframe code
  console.log(page.getCode());
  //Open page
  page.open();
}
function chatgpt() {
  //Creates new ABC
  var page = new ABC({
    type: "blank", //Blank, blob, or overwrite
    url: "https://google.com", //Any url
  });
  //Set the type
  page.setType("blank");
  //Set the url
  page.setUrl("https://chatgpt.55gms.me");
  //Get iframe code
  console.log(page.getCode());
  //Open page
  page.open();
}

function login() {
  const ans = document.getElementById("uranswer").value;
  if (ans == "") {
    alert("Enter a password dumbass");
  } else {
    if (ans == "nico") {
      chatgpt();
      window.location.href = "/index.html";
    } else {
      alert("Incorrect");
      location.reload();
    }
  }
}
