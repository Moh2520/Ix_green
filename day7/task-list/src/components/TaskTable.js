import React from 'react'

export default function TaskTable(props) {

  function onToggleTaskClicked(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task) {
    props.onTaskRemove(task);
  }

  return (
    <div className='mt-3'>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            props.tasks.map((task) =>
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>
                  <i className={
                    task.complete ? "Complete" : "Not Complete"
                  }></i>
                </td>
                <td>
                  <button
                    onClick={(e) => onToggleTaskClicked(task)}
                    className='btn btn-primary btn-sm'> ToogleComplete
                    <i className={
                    task.complete ? "bi bi-toggle-off" : "bi bi-toggle-on"
                  }></i>
                  </button>

                  <button
                    onClick={(e) => onTaskRemove(task)}
                    className='btn btn-primary btn-sm ms-3'> RemoveTask
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>
  )
}