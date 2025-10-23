// js/masks.js
document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function setCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
    }
  }

  function maskCPF(value) {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function maskTelefone(value) {
    let v = value.replace(/\D/g, '').slice(0, 11);
    if (v.length <= 10) {
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
    } else {
      return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
    }
  }

  function maskCEP(value) {
    return value.replace(/\D/g, '').slice(0, 8).replace(/(\d{5})(\d{1,3})/, '$1-$2');
  }

  if (cpf) {
    cpf.addEventListener('input', e => {
      const pos = e.target.selectionStart;
      e.target.value = maskCPF(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if (telefone) {
    telefone.addEventListener('input', e => {
      e.target.value = maskTelefone(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if (cep) {
    cep.addEventListener('input', e => {
      e.target.value = maskCEP(e.target.value);
      setCursorToEnd(e.target);
    });
  }
});
