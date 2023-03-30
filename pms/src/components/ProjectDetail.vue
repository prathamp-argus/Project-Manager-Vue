<template>
    <div>
        <section>
        <base-card>
            <h2>Title : {{ projectTitle }}</h2>
            <h3>{{ description }}</h3>
            <h4> completed :{{ isCompleted }}</h4>
        </base-card>
        </section>
    </div>
</template>
<script>
export default{
    props: ['id'],
    data() {
        return {
        selectedProject: null,
        };
    },
    computed : {
        projectTitle(){
            return this.selectedProject.projectTitle;
        },
        description(){
            return this.selectedProject.description;
        },
        isCompleted(){
            return this.selectedProject.completed ? 'yes' : 'no' ;
        }
    },
    created() {
        this.selectedProject = this.$store.getters['projects/projects'].find(
        (project) => project.id === this.id
        );
    },
    
}</script>