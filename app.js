let InputSecond = document.getElementById("second");
let InputFirst = document.getElementById("first");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let del = document.getElementById("del");
let mnog = document.getElementById("mnog");
let end = document.getElementById("end");

plus.onclick = function () {
  const element = Number(InputFirst.value) + Number(InputSecond.value);
  end.textContent = element;
};

minus.onclick = function () {
  const element = Number(InputFirst.value) - Number(InputSecond.value);
  end.textContent = element;
};
del.onclick = function () {
  const element = Number(InputFirst.value) / Number(InputSecond.value);
  end.textContent = element;
};
mnog.onclick = function () {
  const element = Number(InputFirst.value) * Number(InputSecond.value);
  end.textContent = element;
};
