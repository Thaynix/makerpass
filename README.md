## O que é o MakerPass
é um projeto para controlar o acesso dos bolsistas ao laboratorio maker, assim ter o controle de horas trabalhadas. Também para ajudar com o controle e agendamento das visitas externas ao laboratorio.

## Página de registro de ponto


## Instalação

### Configurando o ambiente

1. **Clone o repositório**:

2. **Crie um ambiente virtual**:
   ```bash
   python -m venv .venv
   ```

3. **Ative o ambiente virtual**:
   - **Windows**:
     ```bash
     .venv\Scripts\activate
     ```
   - **Linux/MacOS**:
     ```bash
     source .venv/bin/activate
     ```

### Configurando sua máquina

1. **Instale as dependências**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Realize as migrações**:
   ```bash
   python manage.py migrate
   ```

### Rodando o servidor

1. **Crie um superusuário** (opcional para acessar o painel administrativo):
   ```bash
   python manage.py createsuperuser
   ```

2. **Inicie o servidor**:
   ```bash
   python manage.py runserver
   ```

3. **Acesse a aplicação localmente**:
   - URL: [localhost:8000](http://localhost:8000)
