import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const List = ({items, taskCompleted, removeItem }) => {
  return (
    <div className="list">
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, i) => {
            const { id, title, isCompleted } = item;
            return (
            <Draggable key={id} draggableId={'draggable-' + id} index={i}>
              {(provided, snapshot) => (
                <article key={id} className="list-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="btn-cont">
                    {isCompleted ? <button type="button" className="completed-btn" 
                      onClick={()=> taskCompleted(id)}>
                      </button> 
                      : <button type="button" className="uncompleted-btn" 
                      onClick={()=> taskCompleted(id)}></button> }
                  </div>
                  {isCompleted ? <p className="title-completed">{title}</p> : <p className="title">{title}</p>}
                  <div className="delete">
                    <button type="button" class="delete-btn" 
                        onClick={()=> removeItem(id)}>
                          <img src={require('../../../images/icon-cross.svg').default}/>
                        </button>
                  </div>    
                </article>
              )}
            </Draggable>
            )
          })}
          </div>         
        )}
        
      </Droppable>
    </div>
  )
  

}

export default List
