using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccessData
{
    public interface IUserRepository
    {
        public Task<IEnumerable<User>> GetUsers();
        public Task<User> LoginUser(User value);
        public Task<int> CreateUser(User value);
        public Task<int> DeleteUser(User value);

    }
}
