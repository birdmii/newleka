export async function getAllData() {
  const res = await fetch(
    "https://newleka.herokuapp.com/newsletters?_limit=-1"
  );
  const newsletters = res.json();

  return newsletters;
}

export async function getCnt() {
  const res = await fetch("https://newleka.herokuapp.com/newsletters/count");
  const cnt = res.json();

  return cnt;
}

export async function getAlert() {
  const res = await fetch("https://newleka.herokuapp.com/alerts/1");
  const alert = res.json();

  return alert;
}

export async function getCategoryData(category) {
  const res = await fetch(
    `https://newleka.herokuapp.com/newsletters?category=${category}`
  );
  const newsletters = res.json();

  return newsletters;
}

export async function getSearchResult(query) {
  const res = await fetch(`https://newleka.herokuapp.com/newsletters?${query}`);
  const newsletters = await res.json();

  return newsletters;
}
