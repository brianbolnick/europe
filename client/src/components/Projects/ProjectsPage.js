import React, { Component } from 'react';
import Layout from '../Layout'
import DashboardCard from '../Dashboard/DashboardCard'
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';
import { getAllProjects } from '../../actions/project_index';
import LoadIcon from '../../img/beyonce-load.gif'

const user_id = JSON.parse(localStorage.getItem('user')).id;

class ProjectPage extends Component {
  componentDidMount() {
    this.props.getAllProjects(user_id);
  }

  render() {
    return (
      <Layout bg="dashboard-layout">
        <div className="home-page" style={{ minHeight: '100vh', width: '75%' }}>
          <ProjectContent data={this.props.projects} />
        </div>
      </Layout>
    );
  }
}

class ProjectContent extends Component {

  render() {
    const { data } = this.props;


    const cards = data.map((project, index) => {
      return <DashboardCard data={project} key={project._id} />;
    })

    return (
      <div>
        {this.props.fetching ?
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            flexFlow: 'column'
          }}>
            <img src={LoadIcon} alt="" />
            <br />
            Getting projects......
          </div>
          :
          <div>
            <div className="project-overview">
              <div className="dashboard-title" >
                <div className="projects-title">Implementation Projects</div>
                <div className="projects-subtitle">{data.length} Active</div>
              </div>
              <div className="project-options">
                <Link to="/projects/new" className='new-project'>
                  <Tooltip
                    title="New Project"
                    position="left"
                    size='big'
                    theme='transparent'
                    arrow
                  >
                    <Icon name='add square' link className="option-item" style={{ color: '#212121' }} />
                  </Tooltip>
                </Link>
              </div>
            </div>

            <div className="main-container">
              {cards}
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.project.error,
    fetching: state.project.fetching,
    projects: state.project.projects
  }
}

export default connect(mapStateToProps, { getAllProjects })(ProjectPage)