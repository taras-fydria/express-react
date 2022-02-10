import * as React from 'react';
import {FC, FormEvent, useState} from 'react';
import BaseInput from './BaseInput';
import IStation from '../../../types/interfaces/IStation';

const NewStation:FC = props => {
  const [newStation, setNewStation] = useState<IStation|null>(null)
  const formSubmitHandler = (event:FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
  }
  return(
    <>
      <form onSubmit={formSubmitHandler}>
        <BaseInput name={} labelClass={} type={''}
      </form>
    </>
  )
}
