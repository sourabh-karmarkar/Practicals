import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from '../components/Course';

const SPACE_ID='lf46vsj6zjoi';
const ACCESS_TOKEN='6cddf30e5167a43dc76d780c415057bd32437674ebe04bcb34d2d32785ff8377';

const client=contentful.createClient({
    space:SPACE_ID,
    accessToken:ACCESS_TOKEN
});

class CourseList extends Component
{
    state={
        courses:[],
        searchString:''
    };

    constructor()
    {
        super();
        this.getCourses();
    }

    getCourses(){
        client.getEntries({
            content_type:'course',
            query:this.state.searchString
        })
        .then((response)=>{
            this.setState({
                courses:response.items
            })
        })
        .catch((error)=>{
            console.log("Error Occured While Fetching Data");
            console.log(error);
        });
    }

    onSearchInputChange=(event)=>{
        if(event.target.value)
        {
            this.setState(
                {searchString:event.target.value}
            );
        }
        else
        {
            this.setState(
                {searchString:''}
            );
        }
        this.getCourses();
    }

    render(){
        return(
            <div>
                {
                    this.state.courses ? (
                        <div>
                            <TextField style={{padding:24}}
                                id="searchInput"
                                placeholder="Search for Courses"
                                margin="normal"
                                onChange={this.onSearchInputChange}/>
                            <Grid container spacing={24} style={{padding:24}}>
                                {this.state.courses.map(currentCourse=>{
                                    return(
                                        <Grid item xs={12} lg={4} xl={3}>
                                            <Course key={currentCourse} course={currentCourse}/>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </div>
                    ) : "No Courses Found"
                }
            </div>
        )
    }
}

export default CourseList;