// remoteDeleteEmployeeRPC will delete an employee over the network.
func remoteDeleteEmployeeRPC() {
    ...
}// sem is a weighted semaphore allowing up to 10 concurrent operations.
var sem = semaphore.NewWeighted(int64(10)) func main() {
   // a context is required for the weighted semaphore pkg.
   ctx := context.Background()
   for _, employee := range employeeList {
       if err := sem.Acquire(ctx, 1); err != nil { 
           // handle error and maybe break
       }
       go func(){ 
           remoteDeleteEmployeeRPC(employee.ID)
           sem.Release(1)
       }()
   }
}
