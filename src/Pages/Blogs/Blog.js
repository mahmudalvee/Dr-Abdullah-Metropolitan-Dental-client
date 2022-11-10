import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" mx-auto card w-8/12 mb-6 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Difference between SQL and NoSQL</h2>
          <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties</p>
          <p>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Difference between javascript and NodeJS</h2>
          <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side.</p>
          <p>NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side.</p>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
          <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
