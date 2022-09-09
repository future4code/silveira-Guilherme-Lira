import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddToCart, SelectQuantity, TitleModal } from './styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalSelectQuantity = ({open, setOpen}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <BoxModal>
            <TitleModal>
                Selecione a quantidade desejada
            </TitleModal>

            <SelectQuantity>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
            </SelectQuantity>

            <ButtonAddToCart>
                Adicionar ao Carrinho
            </ButtonAddToCart>

        </BoxModal>        
      </Modal>
    </div>
  );
}

export default ModalSelectQuantity
