import Checkbox from '@material-ui/core/Checkbox';

function MainDriver(props) {
  
    return (
        <>
        <div className="list-item">
            <div className="row">
                <div className="col-md-9">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
                <div className="col-md-3">
                    <span>Rs {props.price}</span>
                </div>
                <div className="col-md-3">
                    <img src={props.image} alt="logo" width="170" height="84" />
                </div>
            </div>
         
            <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
</div>
           
        </>);

}

export default MainDriver