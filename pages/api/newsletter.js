export async function getAllData() {
  const res = await fetch(
    `${process.env.API_URL}newsletters?_limit=-1`
  );
  const newsletters = res.json();

  return newsletters;
}

export async function getData(cnt) {
  const res = await fetch(
    `${process.env.API_URL}newsletters?_limit=${cnt}`
  );
  const newsletters = res.json();

  return newsletters;
}

export async function getCnt() {
  const res = await fetch(`${process.env.API_URL}newsletters/count`);
  const cnt = res.json();

  return cnt;
}

export async function getAlert() {
  const res = await fetch(`${process.env.API_URL}alerts/1`);
  const alert = res.json();

  return alert;
}

export async function getCategoryData(category) {
  const res = await fetch(
    `${process.env.API_URL}newsletters?category=${category}`
  );
  const newsletters = res.json();

  return newsletters;
}

export async function getSearchResult(query) {
  const res = await fetch(`${process.env.API_URL}newsletters?${query}`);
  const newsletters = await res.json();

  return newsletters;
}

export async function editAlert(id, alertMsg, token) {
  const res = await fetch(`${process.env.API_URL}alerts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: alertMsg,
    }),
  });

  if (res.status === 200) {
    return 200;
  } else {
    return 'error';
  }
}
