// #include<conio.h>
// #include<stdio.h>
// #include<string.h>
// #include<stdlib.h>

// char* helper(char* inp) {
//     char* input = "TCP is a transport";

//     printf("%s",input);
//     char* str = (char*)malloc(27 * sizeof(char));
//     memset(str, '.', 26); // Fill the string with dots
//     str[26] = '\0'; // Add null terminator at the end

//     printf("%s",str);
//     printf("/n");
//     for(int i=0;input[i]!='\0';i++){

//         int x = input[i]-'a';
//         int y = input[i] -'A';
//         printf("%s",input[i]);
//         // printf("%d %d",x,y);
//         if(x>=0 && x<26){
//             if(str[x]=='.'){
//                 str[x] = 'a';
//             }
//         }
//         if(y>=0 && y<26){
//             if(str[y]=='.'){
//                 str[y] = 'A';
//             }
//         }
//     }
//     for(int i=0;i<26;i++){
//         printf("%s",str[i]);
//     }
//     printf("/n");
//     return str;
// }
// int main(){
//     char* str;
//     // scanf("%ms", &str);

//     // printf("You entered: %s\n", str);

//     char* res = helper(str);
//     printf("%s",&res);
//     return 0;

// }

#include <stdio.h>

int main() {
    long long num;
    printf("Enter an integer number: ");
    scanf("%lld", &num);
    int flag = 1;
    long long zero = 0;
    if(num<zero){
        flag = -1;
    }
    long long result = 0;
    int position = 0;

    while (num > 0 && position < sizeof(long long) * 8) {
        int digit = num % 10;
        num /= 10;

        if (digit % 2 == 0) {
            result |= (long long)digit << (position + 1);
        } else {
            result |= (long long)digit << position;
        }

        position += 2;
    }
    result = result* flag;
    printf("Output: %lld\n", result);
    return 0;
}