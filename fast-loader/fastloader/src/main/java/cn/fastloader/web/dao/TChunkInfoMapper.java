package cn.fastloader.web.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import cn.fastloader.web.model.TChunkInfo;

@Mapper
public interface TChunkInfoMapper {
    int deleteByPrimaryKey(String id);

    int insert(TChunkInfo record);

    int insertSelective(TChunkInfo record);

    TChunkInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(TChunkInfo record);

    int updateByPrimaryKey(TChunkInfo record);
    
    ArrayList<Integer> selectChunkNumbers(TChunkInfo record);
}