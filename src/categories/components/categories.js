import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';


function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.isLoading && <p>Buscando...</p>
      }
      {
        props.search.map((item) => <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')} />)
      }
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
