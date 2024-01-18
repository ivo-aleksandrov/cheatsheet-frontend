pipeline {
    agent any

    stages {
        stage('Checkout and pull branch') {
            steps {
                dir('/opt/cheatsheet/frontend') {
                        git credentialsId: 'github-credentials', url: 'https://github.com/ivo-aleksandrov/cheatsheet-frontend.git ', branch: 'main'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                        sh 'docker-compose -f /opt/cheatsheet/docker-compose.yml build --no-cache frontend'
                }
            }
        }

        stage('Update Container') {
            steps {
                script {
                    sh 'docker-compose -f /opt/cheatsheet/docker-compose.yml up --force-recreate --no-deps -d frontend'
                }
            }
        }
    }
}
