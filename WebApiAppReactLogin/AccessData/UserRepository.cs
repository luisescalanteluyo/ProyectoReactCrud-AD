using Dapper;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccessData
{
    public class UserRepository : IUserRepository
    {
        private readonly DapperContext _context;
        public UserRepository(DapperContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<User>> GetUsers()
        {
            var connection = _context.CreateConnection();

            try
            {
                var query = "SELECT * FROM TB_USERS";
                connection.Open();

                var data = await connection.QueryAsync<User>(query);

                connection.Close();

                return data.ToList();
            }
            catch(Exception ex) {
                connection.Close();

                string message = ex.Message;
                string aaa = "";

                throw new Exception();
            }
        }

        public async Task<User?> LoginUser(User value)
        {
            var connection = _context.CreateConnection();

            try
            {
                var query = "SELECT * FROM TB_USERS WHERE EMAIL= @EMAIL AND PASSWORD=@PASSWORD ";
                //var query = "SELECT * FROM TB_USERS where EMAIL=" + "'" + value.email + "' AND password=" + "'" + value.password + "'";
                connection.Open();

                var data = await connection.QuerySingleOrDefaultAsync<User>(query, new { value.email, value.password });

                //var data = await connection.QueryAsync<User>(query);

                connection.Close();

               // var XX= data.First();

                return data;
            }
            catch (Exception ex)
            {
                connection.Close();

                string message = ex.Message;
                string aaa = "";

                throw new Exception();
            }
        }

        public async Task<int> CreateUser(User value)
        {
            var connection = _context.CreateConnection();

            try
            {
                var query = "INSERT TB_USERS (NAME,AGE,EMAIL) VALUES(@NAME,@AGE,@EMAIL) ";
                //var query = "SELECT * FROM TB_USERS where EMAIL=" + "'" + value.email + "' AND password=" + "'" + value.password + "'";
                connection.Open();

                var paramsCustomer = new { Name = value.name, Age= value.age, Email = value.email};

                var rowsAffected = await connection.ExecuteAsync(query, paramsCustomer);
                               
                connection.Close();

                return rowsAffected;
            }
            catch (Exception ex)
            {
                connection.Close();

                string message = ex.Message;
                string aaa = "";

                throw new Exception();
            }
        }

        public async Task<int> DeleteUser(User value)
        {
            var connection = _context.CreateConnection();

            try
            {
                var query = "DELETE FROM TB_USERS WHERE ID=@ID";
                //var query = "SELECT * FROM TB_USERS where EMAIL=" + "'" + value.email + "' AND password=" + "'" + value.password + "'";
                connection.Open();

                var paramsCustomer = new { Id = value.id };

                var rowsAffected = await connection.ExecuteAsync(query, paramsCustomer);

                connection.Close();

                return rowsAffected;
            }
            catch (Exception ex)
            {
                connection.Close();

                string message = ex.Message;
                string aaa = "";

                throw new Exception();
            }
        }

    }


}
