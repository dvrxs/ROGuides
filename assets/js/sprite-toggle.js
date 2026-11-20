document.addEventListener("DOMContentLoaded", () => {
  const tables = document.querySelectorAll(".sprite-table");
  if (!tables.length) return;

  const bar = document.createElement("div");
  bar.className = "sprite-toggle";

  const show = (sex) => {
    tables.forEach((t) => { t.hidden = t.dataset.sex !== sex; });
    bar.querySelectorAll("button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.sex === sex));
    });
  };

  [["male", "Male ♂"], ["female", "Female ♀"]].forEach(([sex, label]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.sex = sex;
    b.textContent = label;
    b.addEventListener("click", () => show(sex));
    bar.append(b);
  });

  tables[0].before(bar);
  document.body.classList.add("sprite-toggle-ready");
  show("male");
});
