import React,{useState} from 'react'
import './TeamCrud.css'
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';

// const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = [];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === 'id') {
    sorter = data.direction === 'ascending' ?
      SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter = data.direction === 'ascending' ?
      SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};


let count = tasks.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (task) => {
    count += 1;
    tasks.push({
      ...task,
      id: count,
    });
    return Promise.resolve(task);
  },
  update: (data) => {
    const task = tasks.find(t => t.id === data.id);
    task.team = data.team;
    task.CD = data.CD;
    task.pp = data.pp;
    task.kills = data.kills;
    task.kp = data.kp;
    task.tp = data.tp;
    return Promise.resolve(task);
  },
  delete: (data) => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  },
};

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};
function TeamCrud() {
  
    function taskCreate(task) {
     
     return task => service.create(task)
     
    }
    function taskUpdate(task) {
     return task => service.update(task)
    }
    function taskDelete(task) {
     return task => service.delete(task)
    }
    
    return(
      <div style={styles.container}>
      <CRUDTable
        
        fetchItems={payload => service.fetchItems(payload)}
      >
        <Fields>
          <Field
            name="id"
            label="Id"
            hideInCreateForm
            readOnly
          />
          <Field
            name="team"
            label="Team"
            placeholder="Title"
          />
          <Field
            name="CD"
            label="Chicken Dinner"
            placeholder="Title"
          />
          <Field
            name="pp"
            label="Position Point"
            placeholder="Title"
          />
          <Field
            name="kills"
            label="Kills"
            placeholder="Title"
          />
          <Field
            name="kp"
            label="Kill Point"
            placeholder="Title"
          />
          <Field
            name="tp"
            label="Total Point"
            placeholder="Title"
          />
          {/* <Field
            name="description"
            label="Description"
            render={DescriptionRenderer}
          /> */}
        </Fields>
        <CreateForm
          title="Team Creation"
          message="Create a new task!"
          trigger="Add Team"
          onSubmit={taskCreate()}
          submitText="Create"
          validate={(values) => {
            const errors = {};
            if (!values.team) {
              errors.title = 'Please, provide task\'s title';
            }
  
            if (!values.CD) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.pp) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.kills) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.kp) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.tp) {
              errors.description = 'Please, provide task\'s description';
            }
  
            return errors;
          }}
        />
  
        <UpdateForm
          title="Task Update Process"
          message="Update task"
          trigger="Update"
          onSubmit={taskUpdate()}
          submitText="Update"
          validate={(values) => {
            const errors = {};
  
            if (!values.team) {
              errors.title = 'Please, provide task\'s title';
            }
  
            if (!values.CD) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.pp) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.kills) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.kp) {
              errors.description = 'Please, provide task\'s description';
            }
            if (!values.tp) {
              errors.description = 'Please, provide task\'s description';
            }
  
            return errors;
          }}
        />
  
        <DeleteForm
          title="Task Delete Process"
          message="Are you sure you want to delete the task?"
          trigger="Delete"
          onSubmit={taskDelete()}
          submitText="Delete"
          validate={(values) => {
            const errors = {};
            if (!values.id) {
              errors.id = 'Please, provide id';
            }
            return errors;
          }}
        />
      </CRUDTable>
    </div>
  );
  
  
}

export default TeamCrud
