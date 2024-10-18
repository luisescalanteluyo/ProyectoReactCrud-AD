using AccessData;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class Logic_User
    {
        private readonly IUserRepository _repo;
        public Logic_User(IUserRepository repo)
        {
            _repo = repo;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var companies = await _repo.GetUsers();
            return companies;
        }

        public async Task<User> LoginUser(User value)
        {
            var companies = await _repo.LoginUser(value);
            return companies;
        }

        public async Task<int> CreateUser(User value)
        {
            var companies = await _repo.CreateUser(value);
            return companies;
        }


        public async Task<int> DeleteUser(User value)
        {
            var companies = await _repo.DeleteUser(value);
            return companies;
        }
    }
}
