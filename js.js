fetch("https://striveschool-api.herokuapp.com/books")
  .then((x) => {
    console.log(x);
    if (x.ok) {
      return x.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((data) => {
    const row = document.querySelector(".row");

    data.forEach((bookppp) => {
      const col = document.createElement("div");
      col.innerHTML = `
            <div class="card">
              <img src="${bookppp.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${bookppp.title}</h5>
                <p class="card-text">${bookppp.price + " Euro"}</p>
                <a href="#" class="btn btn-primary removeBtn">SCARTA</a>
              </div>
            </div>
          `;
      row.appendChild(col);
    });

    /*const col = document.createElement("div");
    const col1 = document.createElement("div");
    const col2 = document.createElement("div");
    const col3 = document.createElement("div");

    col.innerHTML = `
    <div class="card ">
  <img src=${data[0].img} class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${data[0].title}</h5>
      <p class="card-text">${data[0].price + " Euro"}</p>
      <a href="#" class="btn btn-primary removeBtn">SCARTA</a>

  </div>
</div>
`;

    col1.innerHTML = `
    <div class="card ">
  <img src=${data[1].img} class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${data[1].title}</h5>
      <p class="card-text">${data[1].price + " Euro"}</p>
      <a href="#" class="btn btn-primary removeBtn">SCARTA</a>

  </div>
</div>
`;
    col2.innerHTML = `
    <div class="card ">
  <img src=${data[2].img} class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${data[2].title}</h5>
      <p class="card-text">${data[2].price + " Euro"}</p>
      <a href="#" class="btn btn-primary removeBtn">SCARTA</a>
  </div>
</div>
`;
    col3.innerHTML = `
    <div class="card ">
  <img src=${data[3].img} class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${data[3].title}</h5>
      <p class="card-text">${data[3].price + " Euro"}</p>
      <a href="#" class=" btn btn-primary removeBtn">SCARTA</a>
  </div>
</div>
`;

    row.appendChild(col);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    console.log(data);
    console.log(data[0].category);
  });*/

    const scartaBtn = document.querySelectorAll(".removeBtn");
    scartaBtn
      .forEach((button) => {
        button.addEventListener("click", (event) => {
          const card = event.target.closest(".card");
          card.remove();
        });
      })
      .catch((error) => console.log(error));
  });

/*function byeBye() {
  const btnHtml = document.getElementsByClassName("removeBtn");

  btnHtml.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.color = "red";
    });
  });
}

byeBye();

function showMessage() {
  alert("Hello everyone!");
}

showMessage();*/
