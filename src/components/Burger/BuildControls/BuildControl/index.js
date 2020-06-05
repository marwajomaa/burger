import React from 'react';
import { BuildControlDiv } from './style';
import Button from '../../../UI/Button';

const BuildControl = ({label, added, removed, disabled}) =>(
 <BuildControlDiv>
   <div>{label}</div>
   <Button
   type='secondary' 
   label='less'
   clicked={removed} 
   disabled={disabled} />
   <Button 
   type='secondary'
   label="More"
   clicked={added} />
  </BuildControlDiv>
);

export default BuildControl;