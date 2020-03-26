import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers/index';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Students from './students/Students';
import StudentDelete from './students/StudentDelete';
import StudentEdit from './students/StudentEdit';
import StudentDetails from './students/StudentDetails';
import StudentNew from './students/StudentNew';
import Courses from './courses/Courses';
import CourseDelete from './courses/CourseDelete';
import CourseDetails from './courses/CourseDetails';
import CourseEdit from './courses/CourseEdit';
import CourseNew from './courses/CourseNew';
import Landing from './Landing';

const store = createStore(reducers, applyMiddleware(thunk));

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

const UsersPage = () => {
  return(
    <>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/students/${index + 1}`}>{user.name}'s details</Link>
        </h5>
      ))}
    </>
  )
}

const UserPage = ({match, location}) => {
  const { params: { userId } } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Landing} />
          <Route path='/users' exact component={UsersPage} />
          <Route path='/students/:userId' exact component={UserPage} />
          <Route path='/students' exact component={Students} />
          <Route path='/students/new' exact component={StudentNew} />
          <Route path='/students/edit' exact component={StudentEdit} />
          <Route path='/students/delete' exact component={StudentDelete} />
          <Route path='/students/details' exact component={StudentDetails} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/courses/new' exact component={CourseNew} />
          <Route path='/courses/edit' exact component={CourseEdit} />
          <Route path='/courses/delete' exact component={CourseDelete} />
          <Route path='/courses/details' exact component={CourseDetails} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
