document.addEventListener("DOMContentLoaded", function () {
  const studentNames = [
    "Shaofei Huang",
    "Xiangyu Wang",
    "Donglin Yang",
    "Yue Liao",
    "Ziqin Wang",
    "Jinyu Chen",
    "Xiangyi Zheng",
    "Ruipu Wu",
    "Yige Zhang",
    // 可继续添加更多
  ];

  const listElement = document.getElementById("student-names");
  studentNames.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    listElement.appendChild(li);
  });
});
