#include <stdio.h>
#include<string.h>

int main(void){
    int N,i,a,b,min,j;
    scanf("%d",&N);

    char in[N][2],out[N][2],tmp[20];

    for(i=0;i<N;i++)
    {
        scanf("%s",in[i]);
        strcpy(out[i],in[i]);
    }


    for(i=0;i<=N-1;i++){
        for(j=N-1;j>i;j--){
           if(in[j][1]<in[j-1][1]){
           tmp=in[j];
           in[j]=in[j-1];
           in[j-1]=tmp;
           }
         }
    }

    for(i=0;i<n-1;i++){
        min=i;
        for(j=n-1;j>i;j++){
            if(out[j][1]<out[min][1]){
                min=j;
            }
        }
            if(min!=i){
                tmp=out[i];
                out[i]=out[min];
                out[min]=tmp;

            }

    }



    for(i=0;i<N;i++){
    printf("%s",in[i]);
    }

     for(i=0;i<N;i++){
    printf("%s",out[i]);
    }

    printf("Stable");


    for(int i=0;i<N;i++)
    {
        if(strcmp(in[i],out[i])){
            stable=0;
        }
    }




    return 0;

}
