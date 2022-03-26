import React from "react";

const Footer = () => {
  return (
    <div>
      <h3>How react works?</h3>
      <p>
        Answer : When we create a website with react app we use components,
        elements and props. Elements are just plain javascript. Sometimes we use
        elements to send props to components. To change components data react
        create virtual dom and compare with original dom. When react finds any
        changes it update those. If we use that components in many place , react
        just update them all.
      </p>
      <h3>Difference between props and state?</h3>
      <p>
        Answer : Props used by child component to get data from parent
        component. child component can not do any changes to the parent
        component data but parent component can. On the other hand , state used
        by current component to change internal changes. We can change state
        internally or externally by using event handler.
      </p>
      <h3>How useState works?</h3>
      <p>
        Answer : In useState we have three state. They are initial state ,
        updating state and current state. When we use useState , if we set
        initial state value useState give us current state value which is equal
        to initial state value. When we update some value and pass it through
        updating state and it update the initial state value and pass it to
        current state and we get the current updated value.
      </p>
    </div>
  );
};

export default Footer;
