
# FleetTrack

## Descripción

**FleetTrack** es un sistema de monitoreo en tiempo real de vehículos, ideal para el seguimiento de flotas de camiones. Este proyecto utiliza **Node.js**, **MQTT**, **MySQL** y **Leaflet.js** para ofrecer un seguimiento preciso y en tiempo real de las ubicaciones de los vehículos en un mapa interactivo.

---

### Tecnologías Utilizadas

- **Node.js**: Plataforma de JavaScript para desarrollar el backend que interactúa con los dispositivos IoT.
- **MQTT**: Protocolo de mensajería ligero y eficiente, ideal para la comunicación entre dispositivos IoT y la aplicación backend.
- **MySQL**: Base de datos relacional para almacenar de manera eficiente la información de las ubicaciones y el historial de los vehículos.
- **Leaflet.js**: Biblioteca de JavaScript para mostrar mapas interactivos, utilizada para visualizar las ubicaciones de los vehículos en tiempo real.

---

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```
fleettrack/
│
├── backend/                  # Código del servidor Node.js
│   ├── server.js             # Servidor principal (API y WebSocket)
│   ├── mqttClient.js         # Cliente MQTT para interactuar con el broker
│   └── db.js                 # Configuración de la base de datos MySQL
│
├── frontend/                 # Código del cliente React
│   ├── src/
│   │   ├── components/       # Componentes de React
│   │   └── App.js            # Componente principal con Leaflet.js
│   └── public/               # Archivos estáticos y recursos
│
└── docker/                   # Archivos de Docker para contenerización
    └── mqtt/
        └── mosquitto.conf    # Configuración de MQTT
```

---

## Instalación

### Requisitos Previos

- Docker
- Node.js (version 16+)
- MySQL 8+
- MQTT Broker (Mosquitto)

### Pasos para Ejecutar el Proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/fleettrack.git
cd fleettrack
```

2. **Configurar el Broker MQTT**

En la carpeta `docker/mqtt/`, asegurarse de que el archivo `mosquitto.conf` esté correctamente configurado.

3. **Levantar los servicios con Docker Compose**

```bash
docker-compose up -d
```

4. **Instalar las dependencias del backend**

```bash
cd backend
npm install
```

5. **Iniciar el servidor backend**

```bash
npm start
```

6. **Instalar las dependencias del frontend**

```bash
cd frontend
npm install
```

7. **Iniciar el frontend**

```bash
npm start
```

Ahora podrás acceder a la aplicación en **http://localhost:3000**.

---

## Funcionalidad

1. **Monitoreo de vehículos en tiempo real**: Los vehículos envían su ubicación (latitud, longitud) al backend mediante MQTT. El servidor escucha estos mensajes, los guarda en la base de datos y los distribuye a los clientes conectados por WebSocket.
  
2. **Visualización en el mapa**: Utilizando **Leaflet.js**, los vehículos se visualizan en tiempo real en un mapa interactivo.

3. **Base de datos MySQL**: La base de datos guarda el historial de las ubicaciones de los vehículos.

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto o agregar nuevas funcionalidades, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -am 'Agregada nueva funcionalidad'`).
4. Empuja tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un pull request.

---

## License

Este proyecto está bajo la licencia **MIT**. Puedes ver el archivo `LICENSE` para más detalles.

---

# FleetTrack

## Description

**FleetTrack** is a real-time vehicle tracking system, ideal for monitoring truck fleets. This project uses **Node.js**, **MQTT**, **MySQL**, and **Leaflet.js** to provide accurate, real-time tracking of vehicle locations on an interactive map.

---

### Technologies Used

- **Node.js**: JavaScript platform for developing the backend that interacts with IoT devices.
- **MQTT**: Lightweight messaging protocol, ideal for communication between IoT devices and the backend application.
- **MySQL**: Relational database for efficiently storing location information and vehicle history.
- **Leaflet.js**: JavaScript library for rendering interactive maps, used to visualize vehicle locations in real-time.

---

## Project Structure

The project is organized as follows:

```
fleettrack/
│
├── backend/                  # Node.js server code
│   ├── server.js             # Main server (API and WebSocket)
│   ├── mqttClient.js         # MQTT client for interacting with the broker
│   └── db.js                 # MySQL database configuration
│
├── frontend/                 # React client code
│   ├── src/
│   │   ├── components/       # React components
│   │   └── App.js            # Main component with Leaflet.js
│   └── public/               # Static files and resources
│
└── docker/                   # Docker files for containerization
    └── mqtt/
        └── mosquitto.conf    # MQTT configuration
```

---

## Installation

### Prerequisites

- Docker
- Node.js (version 16+)
- MySQL 8+
- MQTT Broker (Mosquitto)

### Steps to Run the Project

1. **Clone the repository**

```bash
git clone https://github.com/your-username/fleettrack.git
cd fleettrack
```

2. **Configure the MQTT Broker**

Make sure the `mosquitto.conf` file in the `docker/mqtt/` folder is correctly configured.

3. **Start the services with Docker Compose**

```bash
docker-compose up -d
```

4. **Install backend dependencies**

```bash
cd backend
npm install
```

5. **Start the backend server**

```bash
npm start
```

6. **Install frontend dependencies**

```bash
cd frontend
npm install
```

7. **Start the frontend**

```bash
npm start
```

You can now access the application at **http://localhost:3000**.

---

## Functionality

1. **Real-time Vehicle Tracking**: Vehicles send their location (latitude, longitude) to the backend via MQTT. The server listens for these messages, stores them in the database, and broadcasts them to WebSocket-connected clients.

2. **Map Visualization**: Using **Leaflet.js**, vehicles are displayed in real-time on an interactive map.

3. **MySQL Database**: The database stores the vehicle location history.

---

## Contributions

Contributions are welcome. If you'd like to improve this project or add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes to your fork (`git push origin feature/new-feature`).
5. Create a pull request.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
