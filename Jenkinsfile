pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the Git repository
                dir('/opt/cheatsheet/frontend') {
                        git credentialsId: 'github-credentials', url: 'https://github.com/ivo-aleksandrov/cheatsheet-frontend.git ', branch: 'main'
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                // Build and push Docker image to a container registry (e.g., Docker Hub)
                script {
                        sh 'docker-compose -f /opt/cheatsheet/docker-compose.yml build --no-cache frontend'
                }
            }
        }

        stage('Update Container') {
            steps {
                // Update the Docker container using the newly built image
                script {
                    sh 'docker-compose -f /opt/cheatsheet/docker-compose.yml up --force-recreate --no-deps -d frontend'
                }
            }
        }
    }
}
