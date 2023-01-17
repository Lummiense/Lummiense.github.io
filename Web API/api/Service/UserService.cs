using System.Collections.Generic;
using System.Threading.Tasks;
using api.Entities;

namespace api.Service
{
    public class UserService:IUserService
    {
        private readonly IDataBase _dataBase;
        public UserService(IDataBase dataBase)
        {
            _dataBase = dataBase;
        }
        public async Task<uint> Add(UserEntity user)
        {
            var result = await _dataBase.Add(user);
            await _dataBase.SaveChangeAsync();
            return result;
        }

        public List<UserEntity> GetAll()
        {
            var users = _dataBase.GetAll<UserEntity>();
            return users;
        }
    }
}