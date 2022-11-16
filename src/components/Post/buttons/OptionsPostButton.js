import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const OptionsPostButton = () => {
    return (
        <>
          {[''].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Edit post</Dropdown.Item>
                <Dropdown.Item eventKey="2">Delete post</Dropdown.Item>
                
              </DropdownButton>
            ),
          )}
        </>
      );
}

export default OptionsPostButton