export const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/v1' : 'someDeployedUrl'
export const LOCAL_STORAGE_TOKEN_NAME = 'todo-jwt'