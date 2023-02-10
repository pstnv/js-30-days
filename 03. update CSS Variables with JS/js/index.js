function handleUpdate () {
    const suffix = this.dataset.sizing || ''; // определяем единицы измерения через атрибут data-sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // обращаемся к документу (css - root) и меняем соответствующее свойство
};

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

