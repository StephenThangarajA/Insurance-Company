import React, { useState } from "react";
import "./style/Dashboard.css";
import Bajaj from './assets/ins-logo1.webp';
import Royal from './assets/ins-logo2.svg';
import Logo from './assets/logo1.svg';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Content />
    </div>
  );
};

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menus = [
    { icon: "bxs-dashboard", text: "Dashboard" },
    { icon: "bxs-group", text: "Profile" },
    { icon: "bxs-message-dots", text: "Notification" },
    { icon: "bxs-doughnut-chart", text: "Transaction History" },
    { icon: "bxs-cog", text: "Settings" },
    { icon: "bxs-log-out-circle", text: "Logout", isLogout: true },
  ];

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <img src={Logo} className="logo" alt="Logo" />
        <span className="text">InsureBazaar</span>
      </a>
      <ul className="side-menu top">
        {menus.slice(0, 5).map((menu, index) => (
          <li key={index} className={activeMenu === menu.text ? "active" : ""} onClick={() => setActiveMenu(menu.text)}>
            <a href="#">
              <i className={`bx ${menu.icon}`}></i>
              <span className="text">{menu.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        {menus.slice(5).map((menu, index) => (
          <li key={index}>
            <a href="#" className={menu.isLogout ? "logout" : ""}>
              <i className={`bx ${menu.icon}`}></i>
              <span className="text">{menu.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Content = () => {
  return (
    <section id="content">
      <Main />
    </section>
  );
};

const Main = () => {
  return (
    <main>
      <Header />
      <InfoBoxes />
      <DataSection />
    </main>
  );
};

const Header = () => {
  return (
    <div className="head-title">
      <div className="left">
        <h1>Dashboard</h1>
      </div>
      <div className="right">
        <h2>Stephen</h2>
      </div>
    </div>
  );
};

const InfoBoxes = () => {
  const infoData = [
    { icon: "bxs-calendar-check", value: "24", label: "Total Insurance Claimed" },
    { icon: "bxs-hourglass", value: "3", label: "Insurance In-Progress" },
    { icon: "bxs-dollar-circle", value: "₹2,25,530", label: "Amount Claimed" },
  ];

  return (
    <ul className="box-info">
      {infoData.map((info, index) => (
        <li key={index}>
          <i className={`bx ${info.icon}`}></i>
          <span className="text">
            <h3>{info.value}</h3>
            <p>{info.label}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

const DataSection = () => {
  return (
    <div className="table-data">
      <RecentOrders />
      <Todos />
    </div>
  );
};

const RecentOrders = () => {
  const orders = [
    { user: "Bajaj Allianz", date: "03-10-2024", status: "Paid", logo: Bajaj },
    { user: "Royal Sundaram", date: "03-10-2024", status: "Paid", logo: Royal },
    { user: "Bajaj Allianz", date: "04-09-2024", status: "Paid", logo: Bajaj },
    { user: "Royal Sundaram", date: "04-09-2024", status: "Paid", logo: Royal },
    { user: "Bajaj Allianz", date: "03-09-2024", status: "Failed", logo: Bajaj },
  ];

  return (
    <div className="order">
      <div className="head">
        <h3>Recent Payments</h3>
        <i className="bx bx-search"></i>
      </div>
      <table>
        <thead>
          <tr>
            <th>Insurance Company</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img src={order.logo} alt="User" />
                <p>{order.user}</p>
              </td>
              <td>{order.date}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Todos = () => {
  const todos = [
    { text: "Bajaj Allianz Insurance Payment" },
    { text: "Royal Sundaram Insurance Payment" },
  ];

  return (
    <div className="todo">
      <div className="head">
        <h3>Upcoming Payments</h3>
        <i className="bx bx-plus"></i>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo.text}</p>
            <i className="bx bx-dots-vertical-rounded"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;