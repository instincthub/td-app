window.addEventListener("load", () => {
  const form = document.querySelector("#new_team_form");
  const input = document.querySelector(".new_team_input");
  const listTeam = document.querySelector(".content");
  // const emptyState = document.querySelector(".empty_state");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const team = input.value;

    if (!team) {
      alert("Please add something");
      return;
    }

    const perTeam = document.createElement("div");
    perTeam.classList.add("p_person");

    const contentEl = document.createElement("div");
    contentEl.classList.add("content");
    // contentEl.innerText = team;
    contentEl.appendChild(perTeam);

    const text = document.createElement("input");
    text.classList.add("txt_h6");
    text.type = "text";
    text.value = team;
    text.setAttribute("readonly", "readonly");

    perTeam.appendChild(text);

    // DELETE EACH TEAM INDIVIDUALLY
    const action = document.createElement("div");
    action.classList.add("remove-parent");

    const deleteTeam = document.createElement("img");
    deleteTeam.classList.add("delete_img");
    deleteTeam.src = "../../static/assets/svgs/close_icon.svg";
    action.appendChild(deleteTeam);

    deleteTeam.addEventListener("click", () => {
      // if (confirm("Are you sure")) {
      //   console.log("Yes Delete");
      // }
      listTeam.removeChild(perTeam);
    });

    listTeam.appendChild(perTeam);
    listTeam.appendChild(action);
    perTeam.appendChild(action);
  });
});
