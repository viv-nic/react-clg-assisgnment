const Checkbox = ({ label, value, checked, onChange }) => {
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    );
<<<<<<< HEAD
  }; 
=======
  };
>>>>>>> ae863a2268f17a28141568fa38299909208c120c
  
  export default Checkbox;