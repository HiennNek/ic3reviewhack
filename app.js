document.getElementById('go').onclick = async () => {
  const url = document.getElementById('url').value;
  const out = document.getElementById('out');
  out.textContent = 'Loading...';

  const res = await fetch('https://ic3reviewhack-backend.hiennek1.workers.dev/api?idurl=' + encodeURIComponent(url));
  const data = await res.json();

  if (!res.ok) {
    out.textContent = data.error;
    return;
  }

  out.textContent = 'Mật khẩu: ' + data.id;
};

