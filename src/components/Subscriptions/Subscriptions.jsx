import { useState } from "react";
import { subscriptions } from "../../data/data";
import "./Subscriptions.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Calculate the total amount
const totalAmount = subscriptions.reduce((total, subscription) => total + subscription.amount, 0);

const Subscriptions = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  return (
    <div className="subgrid-two-item grid-common grid-c5">
      {/* Render content based on currentPage */}
      {currentPage === 0 ? (
        <div className="grid-card" style={{ width: "400px" }}>
          <div className="grid-c-title">
            <h3 className="grid-c-title-text">Department Wise Spend</h3>
          </div>
          <div className="grid-c5-content">
            <div className="grid-items">
              {subscriptions.map((subscription) => (
                <div className="grid-item" key={subscription.id}>
                  <div className="grid-item-l">
                    <p className="text text-silver-v1">{subscription.title}</p>
                  </div>
                  <div className="grid-item-r">
                    <span className="text-silver-v1">₹ {subscription.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Total Section */}
            <div className="grid-item total-amount">
              <div className="grid-item-l">
                <p className="text text-silver-v1 text-bold">Total</p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1 text-decor">₹ {totalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      ) : currentPage === 1 ? (
        <div className="grid-card" style={{ width: "400px" }}>
          <div className="grid-c-title">
            <h3 className="grid-c-title-text">Department Wise Spend - Line Chart</h3>
          </div>
          <div className="grid-c5-content" style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={subscriptions} margin={{ left: 20, right: 20 }}>
                <XAxis dataKey="title" />
                <YAxis tick={{ width: 80 }} />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className="grid-card" style={{ width: "400px" }}>
          <div className="grid-c-title">
            <h3 className="grid-c-title-text">Department Wise Spend - Bar Chart</h3>
          </div>
          <div className="grid-c5-content" style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subscriptions} margin={{ left: 20, right: 20 }}>
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Pagination Buttons for Chart Selection */}
      <div className="chart-selection-buttons">
        <button
          className="chart-button"
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
        >
          Data View
        </button>
        <button
          className="chart-button"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          Line Chart
        </button>
        <button
          className="chart-button"
          onClick={() => setCurrentPage(2)}
          disabled={currentPage === 2}
        >
          Bar Chart
        </button>
      </div>
    </div>
  );
};

export default Subscriptions;
