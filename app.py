from flask import Flask, render_template, request

app = Flask(__name__)

# Simulated database
projects = {
    1: {
        'title': 'Project 1',
        'description': 'Detailed description of Project 1...',
    },
    2: {
        'title': 'Project 2',
        'description': 'Detailed description of Project 2...',
    },
    3: {
        'title': 'Project 3',
        'description': 'Detailed description of Project 3...',
    }
}

@app.route('/')
def index():
    return render_template('index.html', projects=projects)

# @app.route('/project/<int:project_id>')
# def project(project_id):
#     project = projects.get(project_id)
#     if project:
#         return render_template('project.html', project=project)
#     else:
#         return "Project not found", 404

if __name__ == '__main__':
    app.run(debug=True)
