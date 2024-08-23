function submitForm() {
  const email = document.querySelector('#email').value;
  const comments = document.querySelector('#comments').value;
  
  fetch('https://main--ensembledotcomafter--ensemblesc.hlx.page/email-form', {
    method: "POST",
    body: JSON.stringify({
      email,
      comments,
    }),
    headers: {
      "Content-type": "appication/json; charset=UTF-8",
    }
  }).then((response) => {
    console.log(response.json());
  });
}

export default function decorate(block) {
  block.innerHTML = "";

  const form = document.createElement('form');

  // create email input
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  emailLabel.innerText = "Email:";
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");

  form.append(emailLabel);
  form.append(emailInput);

  // create comment input
  const commentLabel = document.createElement('label');
  const commentInput = document.createElement('textarea');
  commentLabel.innerText = "Comments:";
  commentLabel.setAttribute("for", "comments");
  commentInput.setAttribute("type", "text");
  commentInput.setAttribute("id", "comments");
  commentInput.setAttribute("name", "comments");

  form.append(commentLabel);
  form.append(commentInput);

  // submit button
  const submitButton = document.createElement('button');
  submitButton.innerText = "SUBMIT";
  submitButton.setAttribute("type", "button");
  submitButton.onclick = submitForm;
  
  form.append(submitButton);

  block.append(form);
}
