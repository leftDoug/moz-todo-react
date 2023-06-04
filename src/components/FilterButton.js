
function FilterButton(props) {
    return(
        <button type='button' className='btn toogle-btn' aria-pressed='true'>
          <span className='visually-hidden'>Show </span>
          <span>{props.name}</span>
          <span className='visually-hidden'> tasks</span>
        </button>
    );
}

export default FilterButton;
