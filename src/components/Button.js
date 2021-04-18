const Button = ({ action, children }) => {
   return (
      <div className="btnContaine">
         <button type="button" onClick={action}>
            {children}
         </button>
      </div>
   );
};

export default Button;
