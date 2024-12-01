
// road with 0 to n points,
// 2 D array where each row donates si, ei, tip
// each rows 
// ei - si + tip = money
// 



// ith index -> Math.max(choose, leave)
// choose
    // money + need to cehck if ei > si+1 leave i + 1
// leave
    // move to i + 1

public class IntExp {

    private  int totalMoney(int[][] arr, int n) {
        if(n < 0) return 0;
        // cal nextIdx
        int nextIdx = n;
        while(nextIdx > 0 && arr[n][0] < arr[n - 1][1]) {
            nextIdx--;
        }
        // chhose
        int choose = (arr[n][1] - arr[n][0] + arr[n][2]) + totalMoney(arr,  nextIdx);
        
        // leave
        int leave = totalMoney(arr, n - 1);
        return Math.max(choose, leave);
    }

    public static int totalMoneyPassengerCanMake(int[][] arr, int n) {
        return totatMoney(arr, n);
    }
}
